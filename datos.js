// Base de Datos Georreferenciada - SITP Zonal Suba
const paraderos = [
    // --- 1. TIBABUYES / LISBOA / BILBAO / VILLA CINDY ---
    { id: 'P_SUB_01', nombre: 'Av. Suba - ETB Tibabuyes (Cl 143)', lat: 4.7521, lng: -74.0921, rutas: ['Ruta C124 (Bilbao)', 'Ruta 330 (La Estrellita)', 'Ruta Z8 (Toberín)', 'Ruta C117 (Villa Cindy)', 'Ruta C138 (Bilbao)', 'Ruta C147 (Plaza Imperial)'] },
    { id: 'P_SUB_02', nombre: 'Cl 145 - Bilbao / Lisboa (Cl 143B)', lat: 4.7562, lng: -74.1012, rutas: ['Ruta C124 (Bilbao)', 'Ruta C117 (Villa Cindy)', 'Ruta 330 (La Estrellita)', 'Ruta C156 (El Recreo)', 'Ruta C157 (El Recreo)'] },
    { id: 'P_SUB_03', nombre: 'Kr 128 - Villa Cindy / Santa Cecilia', lat: 4.7610, lng: -74.1055, rutas: ['Ruta C117 (Villa Cindy)', 'Ruta C124 (Bilbao)', 'Ruta C159 (Suba Pueblo)'] },

    // --- 2. SUBA CORPAS / CAMPANELLA / TUNELES ---
    { id: 'P_SUB_04', nombre: 'Av. Cali - Suba Corpas (Cl 153)', lat: 4.7582, lng: -74.0891, rutas: ['Ruta C124 (Bilbao)', 'Ruta 330 (La Estrellita)', 'Ruta C156 (El Recreo)', 'Ruta C142 (San Cristóbal)', 'Ruta C110 (Portal Suba)'] },
    { id: 'P_SUB_05', nombre: 'Av. Cali - Campanella / Tuñuelito', lat: 4.7478, lng: -74.0889, rutas: ['Ruta Z8 (Toberín)', 'Ruta C124 (Bilbao)', 'Ruta A305 (Est. Calle 100)', 'Ruta C156 (El Recreo)', 'Ruta C151 (Tibabuyes)'] },

    // --- 3. PORTAL SUBA / TIBABUYES / PLAZA IMPERIAL ---
    { id: 'P_SUB_06', nombre: 'Av. Suba - Portal Suba / Plaza Imperial', lat: 4.7431, lng: -74.0862, rutas: ['Ruta C124 (Bilbao)', 'Ruta A305 (Est. Calle 100)', 'Ruta 191 (Unicentro)', 'Ruta T163 (Perdomo)', 'Ruta C100 (Est. Calle 100)', 'Ruta C129 (Plaza Imperial)'] },
    { id: 'P_SUB_07', nombre: 'Av. Suba - Tv 91 (Suba Salitre / Fontanar)', lat: 4.7380, lng: -74.0815, rutas: ['Ruta C124 (Bilbao)', 'Ruta 91 (Bosa / Porciúncula)', 'Ruta A518 (Est. Héroes)', 'Ruta C103 (Portoalegre)'] },

    // --- 4. RINCON DE SUBA / AURES / COSTA AZUL ---
    { id: 'P_SUB_08', nombre: 'Av. Cali - Cl 139 (Suba Rincón)', lat: 4.7289, lng: -74.0954, rutas: ['Ruta 330 (La Estrellita)', 'Ruta 291 (Terminal Norte)', 'Ruta T163 (Perdomo)', 'Ruta C117 (Villa Cindy)', 'Ruta C131 (Bilbao)', 'Ruta C149 (Aures)'] },
    { id: 'P_SUB_09', nombre: 'Cl 132 - Aures II / Rincón Sur', lat: 4.7215, lng: -74.0988, rutas: ['Ruta 291 (Terminal Norte)', 'Ruta C156 (El Recreo)', 'Ruta 191 (Unicentro)', 'Ruta C101 (Provincia)', 'Ruta C118 (Suba Rincón)'] },
    { id: 'P_SUB_10', nombre: 'Cl 129 - Costa Azul / Gaitana', lat: 4.7250, lng: -74.1020, rutas: ['Ruta C156 (El Recreo)', 'Ruta 291 (Terminal Norte)', 'Ruta C130 (Suba Rincón)'] },

    // --- 5. LA CAMPIÑA / SUBA CENTRO / PRADOS DE SUBA ---
    { id: 'P_SUB_11', nombre: 'Av. Suba - Cl 127 (La Campiña / Subazar)', lat: 4.7185, lng: -74.0721, rutas: ['Ruta 91 (Bosa / Porciúncula)', 'Ruta A518 (Est. Héroes)', 'Ruta C124 (Bilbao)', 'Ruta C156 (El Recreo)', 'Ruta C122 (Unicentro)'] },
    { id: 'P_SUB_12', nombre: 'Cl 147 - Suba Centro / Parque de Suba', lat: 4.7410, lng: -74.0830, rutas: ['Ruta C156 (El Recreo)', 'Ruta C142 (San Cristóbal)', 'Ruta Z8 (Toberín)', 'Ruta C153 (Suba Centro)'] },

    // --- 6. LA COLINA / PORTOALEGRE / PRATO PINAR / SAN JOSÉ DE BAVARIA ---
    { id: 'P_SUB_13', nombre: 'Av. Boyacá - Cl 138 (Portoalegre / La Colina)', lat: 4.7245, lng: -74.0712, rutas: ['Ruta E44 (Mirandela)', 'Ruta 260 (Arabia)', 'Ruta 742A (Paraíso)', 'Ruta C116 (Calle 100)', 'Ruta C134 (Mazurén)'] },
    { id: 'P_SUB_14', nombre: 'Cl 152 - San José de Bavaria / Mazurén', lat: 4.7390, lng: -74.0580, rutas: ['Ruta B900 (El Codito)', 'Ruta E44 (Mirandela)', 'Ruta C142 (San Cristóbal)', 'Ruta C146 (San José)'] },

    // --- 7. NIZA / BULEVAR / SHAIO / CORINTO ---
    { id: 'P_SUB_15', nombre: 'Av. Suba - Cl 116 (Shaio / Bulevar Niza)', lat: 4.7012, lng: -74.0654, rutas: ['Ruta 91 (Bosa / Porciúncula)', 'Ruta 191 (Unicentro)', 'Ruta T163 (Perdomo)', 'Ruta A305 (Est. Calle 100)', 'Ruta C120 (Bulevar Niza)'] },
    { id: 'P_SUB_16', nombre: 'Av. Boyacá - Cl 116 (Pontevedra / Titán)', lat: 4.7052, lng: -74.0811, rutas: ['Ruta 260 (Arabia)', 'Ruta E44 (Mirandela)', 'Ruta C116 (Calle 100)', 'Ruta C101 (Provincia)', 'Ruta C108 (Titán Plaza)'] },

    // --- 8. ISERRA 100 / PATIO BONITO / SALIDA SUR DE SUBA ---
    { id: 'P_SUB_17', nombre: 'Av. Suba - Cl 100 (Iserra 100)', lat: 4.6885, lng: -74.0573, rutas: ['Ruta 91 (Bosa / Porciúncula)', 'Ruta A518 (Est. Héroes)', 'Ruta A305 (Est. Calle 100)', 'Ruta C124 (Bilbao)', 'Ruta C105 (Est. Calle 100)'] },
    { id: 'P_SUB_18', nombre: 'Av. 68 - Cl 100 (Cafam Floresta)', lat: 4.6890, lng: -74.0680, rutas: ['Ruta C101 (Provincia)', 'Ruta 60 (Bachué)', 'Ruta Z7 (Toberín)', 'Ruta C112 (Cafam Floresta)'] }
];

// Telemetría Completa para las 32 Rutas Zonales de Suba
let estadoBuses = {
    'C124': { busId: 'Z99-8812', trafico: 'Normal', tiempoLlegada: '3 min', ubicacion: 'Av. Suba con Cl 127' },
    'A305': { busId: 'Z10-4052', trafico: 'Normal', tiempoLlegada: '5 min', ubicacion: 'Portal Suba' },
    '91':   { busId: 'Z50-9012', trafico: 'Normal', tiempoLlegada: '4 min', ubicacion: 'Iserra 100' },
    '330':  { busId: 'Z22-1109', trafico: 'Normal', tiempoLlegada: '8 min', ubicacion: 'Suba Corpas' },
    'Z8':   { busId: 'Z80-3341', trafico: 'Normal', tiempoLlegada: '6 min', ubicacion: 'Campanella' },
    '191':  { busId: 'Z15-2012', trafico: 'Normal', tiempoLlegada: '7 min', ubicacion: 'Shaio' },
    'A518': { busId: 'Z12-9901', trafico: 'Normal', tiempoLlegada: '5 min', ubicacion: 'La Campiña' },
    'T163': { busId: 'Z40-8811', trafico: 'Normal', tiempoLlegada: '9 min', ubicacion: 'Bulevar Niza' },
    '291':  { busId: 'Z35-7722', trafico: 'Normal', tiempoLlegada: '10 min', ubicacion: 'Suba Rincón' },
    'C117': { busId: 'Z18-5021', trafico: 'Normal', tiempoLlegada: '6 min', ubicacion: 'ETB Tibabuyes' },
    'C156': { busId: 'Z24-9011', trafico: 'Normal', tiempoLlegada: '7 min', ubicacion: 'Bilbao' },
    'E44':  { busId: 'Z30-1102', trafico: 'Normal', tiempoLlegada: '12 min', ubicacion: 'La Colina' },
    'C101': { busId: 'Z70-1190', trafico: 'Normal', tiempoLlegada: '4 min', ubicacion: 'Cafam Floresta' },
    'C142': { busId: 'Z11-2090', trafico: 'Normal', tiempoLlegada: '11 min', ubicacion: 'San José de Bavaria' },
    '260':  { busId: 'Z60-4412', trafico: 'Normal', tiempoLlegada: '9 min', ubicacion: 'Pontevedra' },
    'B900': { busId: 'Z88-1002', trafico: 'Normal', tiempoLlegada: '13 min', ubicacion: 'Mazurén' },
    'C138': { busId: 'Z14-3321', trafico: 'Normal', tiempoLlegada: '5 min', ubicacion: 'Lisboa' },
    'C147': { busId: 'Z21-8840', trafico: 'Normal', tiempoLlegada: '8 min', ubicacion: 'Plaza Imperial' },
    'C157': { busId: 'Z33-1029', trafico: 'Normal', tiempoLlegada: '6 min', ubicacion: 'Aures II' },
    'C159': { busId: 'Z45-6671', trafico: 'Normal', tiempoLlegada: '10 min', ubicacion: 'Santa Cecilia' },
    'C110': { busId: 'Z12-3001', trafico: 'Normal', tiempoLlegada: '4 min', ubicacion: 'Suba Corpas' },
    'C151': { busId: 'Z55-8812', trafico: 'Normal', tiempoLlegada: '7 min', ubicacion: 'Tuñuelito' },
    'C100': { busId: 'Z10-9988', trafico: 'Normal', tiempoLlegada: '3 min', ubicacion: 'Portal Suba' },
    'C129': { busId: 'Z66-4411', trafico: 'Normal', tiempoLlegada: '9 min', ubicacion: 'Suba Salitre' },
    'C103': { busId: 'Z77-1234', trafico: 'Normal', tiempoLlegada: '6 min', ubicacion: 'Portoalegre' },
    'C131': { busId: 'Z88-5521', trafico: 'Normal', tiempoLlegada: '8 min', ubicacion: 'Costa Azul' },
    'C149': { busId: 'Z19-4432', trafico: 'Normal', tiempoLlegada: '5 min', ubicacion: 'Gaitana' },
    'C118': { busId: 'Z22-7711', trafico: 'Normal', tiempoLlegada: '11 min', ubicacion: 'Prados de Suba' },
    'C130': { busId: 'Z33-9981', trafico: 'Normal', tiempoLlegada: '7 min', ubicacion: 'Suba Centro' },
    'C122': { busId: 'Z44-1122', trafico: 'Normal', tiempoLlegada: '4 min', ubicacion: 'Unicentro' },
    'C153': { busId: 'Z55-6611', trafico: 'Normal', tiempoLlegada: '10 min', ubicacion: 'Parque de Suba' },
    'C134': { busId: 'Z66-7788', trafico: 'Normal', tiempoLlegada: '6 min', ubicacion: 'La Colina' }
};

module.exports = { paraderos, estadoBuses };