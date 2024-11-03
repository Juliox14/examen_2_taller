import { useState } from 'react';
import '../styles/Formulario.css';

export default function Formulario() {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [tipoProyecto, setTipoProyecto] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [presupuesto, setPresupuesto] = useState('');
    const [plazo, setPlazo] = useState('');
    const [alcance, setAlcance] = useState('');

    const [step, setStep] = useState(1);

    const nextStep = (e) => {
        e.preventDefault();
        setStep((prevStep) => Math.min(prevStep + 1, 3));
    };

    const prevStep = () => setStep((prevStep) => Math.max(prevStep - 1, 1));

    const handleNombreChange = (e) => setNombre(e.target.value);
    const handleCorreoChange = (e) => setCorreo(e.target.value);
    const handleTelefonoChange = (e) => setTelefono(e.target.value);
    const handleTipoProyectoChange = (e) => setTipoProyecto(e.target.value);
    const handleDescripcionChange = (e) => setDescripcion(e.target.value);
    const handlePresupuestoChange = (e) => setPresupuesto(e.target.value);
    const handlePlazoChange = (e) => setPlazo(e.target.value);
    const handleAlcanceChange = (e) => setAlcance(e.target.value);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert('En breve, un asesor se pondrá en contacto con usted');
        window.location.reload();
    };

    return (
        <div className="form-container">
            <img className="logo" src="/WindCodeHD.png" alt="WindCodeHD" />
            <h1>Cotiza tu idea a desarrollar</h1>
            <p>Obtén la cotización de tu aplicación móvil o web en segundos.</p>

            <div className="progress-bar">
                <div className={`step ${step >= 1 ? 'active' : ''}`}></div>
                <div className={`step ${step >= 2 ? 'active' : ''}`}></div>
                <div className={`step ${step >= 3 ? 'active' : ''}`}></div>
            </div>

            <form onSubmit={handleFormSubmit}>
                {step === 1 && (
                    <section>
                        <div className="form-title">
                            <h2>Información de contacto</h2>
                            <hr />
                        </div>
                        <label htmlFor="nombre">Nombre completo:</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu nombre completo"
                            value={nombre}
                            onChange={handleNombreChange}
                            required
                        />

                        <label htmlFor="correo">Correo electrónico:</label>
                        <input
                            type="email"
                            id="correo"
                            name="correo"
                            placeholder="correo@ejemplo.com"
                            value={correo}
                            onChange={handleCorreoChange}
                            required
                        />

                        <label htmlFor="telefono">Teléfono:</label>
                        <input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            placeholder="Número de contacto"
                            value={telefono}
                            onChange={handleTelefonoChange}
                            required
                        />
                    </section>
                )}

                {step === 2 && (
                    <section>
                        <div className="form-title">
                            <h2>Detalles del proyecto</h2>
                            <hr />
                        </div>
                        <label htmlFor="tipoProyecto">Tipo de proyecto:</label>
                        <select
                            id="tipoProyecto"
                            name="tipoProyecto"
                            value={tipoProyecto}
                            onChange={handleTipoProyectoChange}
                            required
                        >
                            <option value="">Seleccionar</option>
                            <option value="movil">Aplicación móvil</option>
                            <option value="web">Aplicación web</option>
                            <option value="ambos">Ambos</option>
                        </select>

                        <label htmlFor="descripcion">Descripción de la idea:</label>
                        <textarea
                            id="descripcion"
                            name="descripcion"
                            rows="4"
                            placeholder="Describe brevemente tu proyecto"
                            value={descripcion}
                            onChange={handleDescripcionChange}
                            required
                        ></textarea>

                        <label htmlFor="presupuesto">Presupuesto aproximado (MXN):</label>
                        <input
                            type="number"
                            id="presupuesto"
                            name="presupuesto"
                            placeholder="Ej. 50000"
                            value={presupuesto}
                            onChange={handlePresupuestoChange}
                            required
                        />

                    </section>
                )}

                {step === 3 && (
                    <section>
                        <div className="form-title">
                            <h2>Más detalles del proyecto</h2>
                            <hr />
                        </div>
                        <label htmlFor="plazo">Plazo estimado:</label>
                        <select
                            id="plazo"
                            name="plazo"
                            value={plazo}
                            onChange={handlePlazoChange}
                        >
                            <option value="">Seleccionar</option>
                            <option value="1-3 meses">1-3 meses</option>
                            <option value="3-6 meses">3-6 meses</option>
                            <option value="6+ meses">Más de 6 meses</option>
                        </select>

                        <label htmlFor="alcance">Alcance del Proyecto:</label>
                        <select id="alcance" name="alcance">
                            <option value="bajo">Bajo (una sola funcionalidad)</option>
                            <option value="medio">Medio (múltiples funcionalidades)</option>
                            <option value="alto">Alto (aplicación completa)</option>
                        </select>

                        <label className="terminos">
                            <input type="checkbox" name="terms" /> Acepto los términos y condiciones
                        </label>
                    </section>
                )}

                <div className="form-navigation">
                    {step > 1 && <button type="button" onClick={prevStep} className='btn-prev'>Anterior</button>}
                    {step < 3 ? (
                        <button type="button" onClick={nextStep}>Siguiente</button>
                    ) : (
                        <button type="submit">Solicitar cotización</button>
                    )}
                </div>
            </form>
        </div>
    );
}
