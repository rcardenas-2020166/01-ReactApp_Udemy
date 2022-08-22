import PropTypes from 'prop-types';


const newMessage = 'Rodrigo Cárdenas'
const newMessage2 = [1,2,3,4,5,6,7,8,9]
const newMessage3 = 
{
    name: 'Gerardo',
    apellido: 'Monroy'
}

const getResult = (a,b) =>
{
    return a * b;
}

export const FirstApp = ({title, subTitle, name}) => 
{

    return(
        <>
            <h1>{name}</h1>
            <h1>{title}</h1>
            <h1>{subTitle}</h1>
            <h1>{1 + 1}</h1>
            <h2>{newMessage}</h2>
            <h2>{newMessage2}</h2>
            <h6>{getResult(2,5)}</h6>
            <code>{JSON.stringify(newMessage3)}</code>
            <p>Estudiante de Kinal</p>
        </>
    )
}

FirstApp.propTypes = 
{
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired,
}

FirstApp.defaultProps = 
{
    name: 'rcardenas',
    title: 'No Hay Título',
    subTitle: 4,
}