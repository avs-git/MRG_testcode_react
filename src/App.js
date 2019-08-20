import React from 'react'
import ReactDOM from "react-dom";
import { ThemeProvider } from "react-jss";

import Layout from './Layout';
import Figure from './Figure';


const theme = {
    color: '#f7df1e',
    backgroundColor: '#24292e',
};


const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Figure
                    src='https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg?dl&fit=crop&crop=entropy&w=640&h=1006'
                    arWidth={3}
                    arHeight={5}
                />
                <Figure
                    src='https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg?dl&fit=crop&crop=entropy&w=640&h=1006'
                    arWidth={4}
                    arHeight={10}
                />
                <Figure
                    src='https://images.pexcvxcvxels.com/photos/1647214/pexels-photo-1647214.jpeg?dl&fit=crop&crop=entropy&w=640&h=1006'
                    arWidth={10}
                    arHeight={16}
                >
                    Битая ссылка на изображение
                </Figure>
                <Figure
                    src='https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg?dl&fit=crop&crop=entropy&w=640&h=1006'
                    arWidth={3}
                    arHeight={5}
                >
                    Автор: <a href='https://www.pexels.com/@simonmigaj”'>Simon Migaj</a>
                </Figure>
                <Figure
                    src='https://avatars.mds.yandex.net/get-pdb/28866/dbe72c89-078b-450c-bbb6-ee8ebbc8bdd0/s1200'
                >
                    Изображение без arWidth и arHeight
                </Figure>
            </Layout>
        </ThemeProvider>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));