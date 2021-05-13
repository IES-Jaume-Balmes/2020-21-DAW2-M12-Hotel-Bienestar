import estandar from "./imagenes/habitacionEstandar.jpg"
import superior from "./imagenes/habitacionSuperior.jpg"
import ejecutiva from "./imagenes/habitacionEjecutiva.jpg"
import familiar from "./imagenes/habitacionFamiliar.jpg"
import suite from "./imagenes/suitePresidencial.jpg"



const mockData = [
    {
        src: estandar,
        title: "Habitacion Estandar",
        cat: "room",
        price: 150,
        stock: 5,
        notAvailablestart: new Date(2021, 6, 20).getTime(),
        notAvailableendd: new Date(2021, 6, 25).getTime(),
    },
    {
        src: familiar,
        title: "Habitacion Familiar",
        cat: "room",
        price: 200,
        stock: 2,
        notAvailablestart: new Date(2021, 6, 11).getTime(),
        notAvailableendd: new Date(2021, 6, 15).getTime(),
    },
    {
        src: superior,
        title: "Habitacion Superior",
        cat: "room",
        price: 180,
        stock: 4,
        notAvailablestart: new Date(2021, 6, 11).getTime(),
        notAvailableendd: new Date(2021, 6, 15).getTime(),
    },
    {
        src: ejecutiva,
        title: "Habitacion Ejecutiva",
        cat: "room",
        price: 180,
        stock: 3,
        notAvailablestart: new Date(2021, 6, 11).getTime(),
        notAvailableendd: new Date(2021, 6, 15).getTime(),
    },
    {
        src: suite,
        title: "Suite",
        cat: "room",
        price: 250,
        stock: 1,
        notAvailablestart: new Date(2021, 6, 11).getTime(),
        notAvailableendd: new Date(2021, 6, 15).getTime(),
    },
];

export const chips = [
    {key: 0, label: "Estandar"},
    {key: 1, label: "Superior"},
    {key: 2, label: "Ejecutiva"},
    {key: 3, label: "Familiar"},
    {key: 4, label: "Suite"},

]


export default mockData;