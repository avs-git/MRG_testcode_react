// encoded svg-spinner
const loader = 'url("data:image/svg+xml,%3Csvg%20class%3D%22lds-spinner%22%20width%3D%22200px%22%20%20height%' +
    '3D%22200px%22%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww' +
    '.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20100%20100%22%20preserveAspectRatio%3D%22xMidYMid%22%20style' +
    '%3D%22background%3A%20none%3B%22%3E%3Cg%20transform%3D%22rotate(0%2050%2050)%22%3E%0A%20%20%3Crect%20x%3D%' +
    '2247%22%20y%3D%2224%22%20rx%3D%229.4%22%20ry%3D%224.8%22%20width%3D%226%22%20height%3D%2212%22%20fill%3D%22' +
    '%231d0e0b%22%3E%0A%20%20%20%20%3Canimate%20attributeName%3D%22opacity%22%20values%3D%221%3B0%22%20keyTimes%' +
    '3D%220%3B1%22%20dur%3D%221s%22%20begin%3D%22-0.9166666666666666s%22%20repeatCount%3D%22indefinite%22%3E%3C%' +
    '2Fanimate%3E%0A%20%20%3C%2Frect%3E%0A%3C%2Fg%3E%3Cg%20transform%3D%22rotate(30%2050%2050)%22%3E%0A%20%20%3' +
    'Crect%20x%3D%2247%22%20y%3D%2224%22%20rx%3D%229.4%22%20ry%3D%224.8%22%20width%3D%226%22%20height%3D%2212%22' +
    '%20fill%3D%22%231d0e0b%22%3E%0A%20%20%20%20%3Canimate%20attributeName%3D%22opacity%22%20values%3D%221%3B0%22' +
    '%20keyTimes%3D%220%3B1%22%20dur%3D%221s%22%20begin%3D%22-0.8333333333333334s%22%20repeatCount%3D%22indefinit' +
    'e%22%3E%3C%2Fanimate%3E%0A%20%20%3C%2Frect%3E%0A%3C%2Fg%3E%3Cg%20transform%3D%22rotate(60%2050%2050)%22%3E%0A' +
    '%20%20%3Crect%20x%3D%2247%22%20y%3D%2224%22%20rx%3D%229.4%22%20ry%3D%224.8%22%20width%3D%226%22%20height%3D%2' +
    '212%22%20fill%3D%22%231d0e0b%22%3E%0A%20%20%20%20%3Canimate%20attributeName%3D%22opacity%22%20values%3D%221%' +
    '3B0%22%20keyTimes%3D%220%3B1%22%20dur%3D%221s%22%20begin%3D%22-0.75s%22%20repeatCount%3D%22indefinite%22%3E%' +
    '3C%2Fanimate%3E%0A%20%20%3C%2Frect%3E%0A%3C%2Fg%3E%3Cg%20transform%3D%22rotate(90%2050%2050)%22%3E%0A%20%20' +
    '%3Crect%20x%3D%2247%22%20y%3D%2224%22%20rx%3D%229.4%22%20ry%3D%224.8%22%20width%3D%226%22%20height%3D%2212%' +
    '22%20fill%3D%22%231d0e0b%22%3E%0A%20%20%20%20%3Canimate%20attributeName%3D%22opacity%22%20values%3D%221%3B0' +
    '%22%20keyTimes%3D%220%3B1%22%20dur%3D%221s%22%20begin%3D%22-0.6666666666666666s%22%20repeatCount%3D%22indef' +
    'inite%22%3E%3C%2Fanimate%3E%0A%20%20%3C%2Frect%3E%0A%3C%2Fg%3E%3Cg%20transform%3D%22rotate(120%2050%2050)%2' +
    '2%3E%0A%20%20%3Crect%20x%3D%2247%22%20y%3D%2224%22%20rx%3D%229.4%22%20ry%3D%224.8%22%20width%3D%226%22%20' +
    'height%3D%2212%22%20fill%3D%22%231d0e0b%22%3E%0A%20%20%20%20%3Canimate%20attributeName%3D%22opacity%22%20' +
    'values%3D%221%3B0%22%20keyTimes%3D%220%3B1%22%20dur%3D%221s%22%20begin%3D%22-0.5833333333333334s%22%20' +
    'repeatCount%3D%22indefinite%22%3E%3C%2Fanimate%3E%0A%20%20%3C%2Frect%3E%0A%3C%2Fg%3E%3Cg%20transform%3D%22' +
    'rotate(150%2050%2050)%22%3E%0A%20%20%3Crect%20x%3D%2247%22%20y%3D%2224%22%20rx%3D%229.4%22%20ry%3D%224.8%' +
    '22%20width%3D%226%22%20height%3D%2212%22%20fill%3D%22%231d0e0b%22%3E%0A%20%20%20%20%3Canimate%20attributeName' +
    '%3D%22opacity%22%20values%3D%221%3B0%22%20keyTimes%3D%220%3B1%22%20dur%3D%221s%22%20begin%3D%22-0.5s%22%20' +
    'repeatCount%3D%22indefinite%22%3E%3C%2Fanimate%3E%0A%20%20%3C%2Frect%3E%0A%3C%2Fg%3E%3Cg%20transform%3D%22' +
    'rotate(180%2050%2050)%22%3E%0A%20%20%3Crect%20x%3D%2247%22%20y%3D%2224%22%20rx%3D%229.4%22%20ry%3D%224.8%22' +
    '%20width%3D%226%22%20height%3D%2212%22%20fill%3D%22%231d0e0b%22%3E%0A%20%20%20%20%3Canimate%20attributeName%' +
    '3D%22opacity%22%20values%3D%221%3B0%22%20keyTimes%3D%220%3B1%22%20dur%3D%221s%22%20begin%3D%22-0.416666666666' +
    '6667s%22%20repeatCount%3D%22indefinite%22%3E%3C%2Fanimate%3E%0A%20%20%3C%2Frect%3E%0A%3C%2Fg%3E%3Cg%20transf' +
    'orm%3D%22rotate(210%2050%2050)%22%3E%0A%20%20%3Crect%20x%3D%2247%22%20y%3D%2224%22%20rx%3D%229.4%22%20ry%3D%22' +
    '4.8%22%20width%3D%226%22%20height%3D%2212%22%20fill%3D%22%231d0e0b%22%3E%0A%20%20%20%20%3Canimate%20attributeN' +
    'ame%3D%22opacity%22%20values%3D%221%3B0%22%20keyTimes%3D%220%3B1%22%20dur%3D%221s%22%20begin%3D%22-0.33333333' +
    '33333333s%22%20repeatCount%3D%22indefinite%22%3E%3C%2Fanimate%3E%0A%20%20%3C%2Frect%3E%0A%3C%2Fg%3E%3Cg%20tran' +
    'sform%3D%22rotate(240%2050%2050)%22%3E%0A%20%20%3Crect%20x%3D%2247%22%20y%3D%2224%22%20rx%3D%229.4%22%20ry%3D%' +
    '224.8%22%20width%3D%226%22%20height%3D%2212%22%20fill%3D%22%231d0e0b%22%3E%0A%20%20%20%20%3Canimate%20attribut' +
    'eName%3D%22opacity%22%20values%3D%221%3B0%22%20keyTimes%3D%220%3B1%22%20dur%3D%221s%22%20begin%3D%22-0.25s%22' +
    '%20repeatCount%3D%22indefinite%22%3E%3C%2Fanimate%3E%0A%20%20%3C%2Frect%3E%0A%3C%2Fg%3E%3Cg%20transform%3D%22r' +
    'otate(270%2050%2050)%22%3E%0A%20%20%3Crect%20x%3D%2247%22%20y%3D%2224%22%20rx%3D%229.4%22%20ry%3D%224.8%22%20' +
    'width%3D%226%22%20height%3D%2212%22%20fill%3D%22%231d0e0b%22%3E%0A%20%20%20%20%3Canimate%20attributeName%3D%22' +
    'opacity%22%20values%3D%221%3B0%22%20keyTimes%3D%220%3B1%22%20dur%3D%221s%22%20begin%3D%22-0.1666666666666666' +
    '6s%22%20repeatCount%3D%22indefinite%22%3E%3C%2Fanimate%3E%0A%20%20%3C%2Frect%3E%0A%3C%2Fg%3E%3Cg%20transform' +
    '%3D%22rotate(300%2050%2050)%22%3E%0A%20%20%3Crect%20x%3D%2247%22%20y%3D%2224%22%20rx%3D%229.4%22%20ry%3D%224' +
    '.8%22%20width%3D%226%22%20height%3D%2212%22%20fill%3D%22%231d0e0b%22%3E%0A%20%20%20%20%3Canimate%20attributeN' +
    'ame%3D%22opacity%22%20values%3D%221%3B0%22%20keyTimes%3D%220%3B1%22%20dur%3D%221s%22%20begin%3D%22-0.08333333' +
    '333333333s%22%20repeatCount%3D%22indefinite%22%3E%3C%2Fanimate%3E%0A%20%20%3C%2Frect%3E%0A%3C%2Fg%3E%3Cg%20tr' +
    'ansform%3D%22rotate(330%2050%2050)%22%3E%0A%20%20%3Crect%20x%3D%2247%22%20y%3D%2224%22%20rx%3D%229.4%22%20ry%' +
    '3D%224.8%22%20width%3D%226%22%20height%3D%2212%22%20fill%3D%22%231d0e0b%22%3E%0A%20%20%20%20%3Canimate%20at' +
    'tributeName%3D%22opacity%22%20values%3D%221%3B0%22%20keyTimes%3D%220%3B1%22%20dur%3D%221s%22%20begin%3D%220' +
    's%22%20repeatCount%3D%22indefinite%22%3E%3C%2Fanimate%3E%0A%20%20%3C%2Frect%3E%0A%3C%2Fg%3E%3C%2Fsvg%3E")';

export default loader;