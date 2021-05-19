import renderBienvenido from './sliceRenderers/renderBienvenido'
import renderNavBar from './sliceRenderers/renderNavBar'
import renderQueSidra from './sliceRenderers/renderQueSidra'

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
                return renderBienvenido(element.primary)
            case 'que_es_la_sidra':
                return renderQueSidra(element.primary)
            default:
                return null
        }
    })
}