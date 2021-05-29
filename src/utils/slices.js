import renderBienvenido from './sliceRenderers/renderBienvenido'
import renderNavBar from './sliceRenderers/renderNavBar'
import renderQueSidra from './sliceRenderers/renderQueSidra'
import renderNuestrosProductos from './sliceRenderers/renderNuestrosProductos'
import renderPuntos from './sliceRenderers/renderPuntos'
import renderOfertas from './sliceRenderers/renderOfertas'
import renderRecetas from './sliceRenderers/renderRecetas'
import renderNosotros from './sliceRenderers/renderNosotros'
import renderContacto from './sliceRenderers/renderContacto'

export default function getSlices(data) {
    if (!data) {
        console.error('No data provided')
        return
    }

    // eslint-disable-next-line consistent-return
    return data.map(element => {
        switch (element.slice_type) {
            case 'navbar':
                return renderNavBar(element.primary, element.items)
            case 'bienvenido':
                return renderBienvenido(element.primary, element.items)
            case 'que_es_la_sidra':
                return renderQueSidra(element.primary)
            case 'nuestros_productos':
                return renderNuestrosProductos(element.primary, element.items)
            case 'puntos_de_venta':
                return renderPuntos(element.primary, element.items)
            case 'ofertas_actuales':
                return renderOfertas(element.primary, element.items)
            case 'recetas_con_sidra':
                return renderRecetas(element.primary, element.items)
            case 'nosotros':
                return renderNosotros(element.primary, element.items)
            case 'contacto':
                return renderContacto(element.primary, element.items)
            default:
                return null
        }
    })
}