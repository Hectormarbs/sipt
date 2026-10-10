const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Base de Datos Georreferenciada de Paraderos (Av. Suba + Av. Cali)
const paraderos = [
    { id: 'P_SUB_01', nombre: 'Av. Suba - ETB Tibabuyes (Cl 143)', lat: 4.7521, lng: -74.0921, rutas: ['Ruta C124 (Bilbao)', 'Ruta 330 (La Estrellita)', 'Ruta Z8 (Toberín)'] },
    { id: 'P_SUB_02', nombre: 'Av. Suba - Portal Suba / Plaza Imperial', lat: 4.7431, lng: -74.0862, rutas: ['Ruta C124 (Bilbao)', 'Ruta A305 (Est. Calle 100)', 'Ruta 191 (Unicentro)'] },
    { id: 'P_SUB_03', nombre: 'Av. Suba - Cl 127 (La Campiña / Subazar)', lat: 4.7185, lng: -74.0721, rutas: ['Ruta 91 (Bosa / Porciúncula)', 'Ruta A518 (Est. Héroes)', 'Ruta C124 (Bilbao)'] },
    { id: 'P_SUB_04', nombre: 'Av. Suba - Cl 116 (Shaio / Bulevar Niza)', lat: 4.7012, lng: -74.0654, rutas: ['Ruta 91 (Bosa / Porciúncula)', 'Ruta 191 (Unicentro)', 'Ruta T163 (Perdomo)'] },
    { id: 'P_SUB_05', nombre: 'Av. Suba - Cl 100 (Iserra 100)', lat: 4.6885, lng: -74.0573, rutas: ['Ruta 91 (Bosa / Porciúncula)', 'Ruta A518 (Est. Héroes)', 'Ruta A305 (Est. Calle 100)'] },
    { id: 'P_SUB_06', nombre: 'Av. Suba - Cl 80 (Escuela Militar)', lat: 4.6721, lng: -74.0682, rutas: ['Ruta 91 (Bosa / Porciúncula)', 'Ruta T163 (Perdomo)', 'Ruta C124 (Bilbao)'] },

    { id: 'P_CAL_01', nombre: 'Av. Cali - Suba Corpas (Cl 153)', lat: 4.7582, lng: -74.0891, rutas: ['Ruta C124 (Bilbao)', 'Ruta 330 (La Estrellita)'] },
    { id: 'P_CAL_02', nombre: 'Av. Cali - Campanella / Portal Suba', lat: 4.7478, lng: -74.0889, rutas: ['Ruta Z8 (Toberín)', 'Ruta C124 (Bilbao)', 'Ruta A305 (Est. Calle 100)'] },
    { id: 'P_CAL_03', nombre: 'Av. Cali - Cl 139 (Suba Rincón)', lat: 4.7289, lng: -74.0954, rutas: ['Ruta 330 (La Estrellita)', 'Ruta 291 (Terminal Norte)', 'Ruta T163 (Perdomo)'] },
    { id: 'P_CAL_04', nombre: 'Av. Cali - Cl 90 (Serena / Bachué)', lat: 4.7011, lng: -74.1023, rutas: ['Ruta 291 (Terminal Norte)', 'Ruta Z8 (Toberín)', 'Ruta 191 (Unicentro)'] },
    { id: 'P_CAL_05', nombre: 'Av. Cali - Cl 80 (Portal 80)', lat: 4.6912, lng: -74.1089, rutas: ['Ruta A305 (Est. Calle 100)', 'Ruta 291 (Terminal Norte)', 'Ruta T163 (Perdomo)'] },
    { id: 'P_CAL_06', nombre: 'Av. Cali - Cl 63 (Álamos / Diverplaza)', lat: 4.6754, lng: -74.1152, rutas: ['Ruta A305 (Est. Calle 100)', 'Ruta 191 (Unicentro)', 'Ruta Z8 (Toberín)'] },
    { id: 'P_CAL_07', nombre: 'Av. Cali - Cl 26 (Portal El Dorado)', lat: 4.6591, lng: -74.1215, rutas: ['Ruta A305 (Est. Calle 100)', 'Ruta T163 (Perdomo)', 'Ruta 291 (Terminal Norte)'] }
];

let registrosDemanda = [];
let estadoTelemetriaBuses = {};

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/paraderos', (req, res) => {
    res.json(paraderos);
});

// Registrar marcación de usuario
app.post('/api/registrar', (req, res) => {
    const { paraderoId, ruta } = req.body;
    if (!paraderoId || !ruta) return res.status(400).json({ error: 'Faltan datos' });

    const nuevoRegistro = { id: registrosDemanda.length + 1, paraderoId, ruta, timestamp: new Date() };
    registrosDemanda.push(nuevoRegistro);
    console.log(`[DEMANDA REGISTRADA] Paradero: ${paraderoId} | Ruta: ${ruta}`);
    res.json({ status: 'OK' });
});

// Resumen de demanda activa (expiración a 15 min)
app.get('/api/demanda', (req, res) => {
    const quinceMinutosAtras = new Date(Date.now() - 15 * 60 * 1000);
    const demandaActiva = registrosDemanda.filter(r => new Date(r.timestamp) > quinceMinutosAtras);

    const resumen = {};
    paraderos.forEach(p => {
        resumen[p.id] = { nombre: p.nombre, lat: p.lat, lng: p.lng, rutas: {} };
    });

    demandaActiva.forEach(reg => {
        if (resumen[reg.paraderoId]) {
            resumen[reg.paraderoId].rutas[reg.ruta] = (resumen[reg.paraderoId].rutas[reg.ruta] || 0) + 1;
        }
    });

    res.json(resumen);
});

// Telemetría enviada por el conductor
app.post('/api/bus/telemetria', (req, res) => {
    const { ruta, trafico, tiempoLlegada, ubicacion } = req.body;
    if (!ruta) return res.status(400).json({ error: 'Falta especificar la ruta' });

    estadoTelemetriaBuses[ruta] = {
        trafico,
        tiempoLlegada,
        ubicacion,
        timestamp: new Date()
    };

    console.log(`[TELEMETRÍA RECIBIDA] Ruta: ${ruta} | Tráfico: ${trafico} | ETA: ${tiempoLlegada}`);
    res.json({ status: 'OK' });
});

// Consultar telemetría en tiempo real
app.get('/api/bus/telemetria', (req, res) => {
    res.json(estadoTelemetriaBuses);
});

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));