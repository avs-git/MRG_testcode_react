import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import axios from 'axios';

// Загружаем svg в переменные для моментального отображения
import loader from './svg/loader'
import errorBall from './svg/errorBall'

const styles = () => ({
    figure: {
        width: '100%',
        border: '1px solid white',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        margin: '10px 0',
    },
    figureDiv: {
        width: '100%',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
});


// использую let, чтобы потом прикрепить jss-injectSheet к этой же переменной
let Figure = ({classes, children, ...props}) => {

    const [imageHeight, setImageHeight] = useState(null);
    const [bgImageSrc, setBgImageSrc] = useState(loader);
    const currentImageWrapper = useRef(null);

    // задаём необходимую высоту элемента согласно переданным пропорциям изображения
    useEffect(() => {
        const curWidth = currentImageWrapper.current.clientWidth;
        const calculatedHeight = curWidth / props.arWidth * props.arHeight;
        setImageHeight(calculatedHeight);
    }, []);


    // запрашиваем заголовок картинки с сервера. Если всё хорошо, присваиваем фон и устанавливаем ширину.
    // в случае ошибки меняем фон на "ошибочный"
    // таймаут добавлен для первоначальной демонстрации лоадера
    useEffect(() => {
        axios.head(props.src)
            .then(() => {
                setTimeout(() => {
                    setBgImageSrc('url(' + props.src + ')');
                }, 1000);
                currentImageWrapper.current.style.backgroundSize = 'cover';
            })
            .catch(() => setBgImageSrc(errorBall));
    }, []);


    return (
        <figure className={classes.figure}>
            <div  ref={currentImageWrapper} className={classes.figureDiv}
                  style={{height: imageHeight, backgroundImage: bgImageSrc}}/>
            {children ? <figcaption>{children}</figcaption> : null}
        </figure>
    );
};

Figure.propTypes = {
  src: PropTypes.string.isRequired,
  arWidth: PropTypes.number,
  arHeight: PropTypes.number,
};

Figure.defaultProps = {
  arWidth: 16,
  arHeight: 9,
};

Figure = injectSheet(styles)(Figure);
export default Figure;
