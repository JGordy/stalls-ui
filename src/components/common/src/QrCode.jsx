import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';

const QrCode = ({
    url,
    colors = {},
    altText,
}) => {

    const [qr, setQr] = useState('');

    const generateCode = () => {
        QRCode.toDataURL(url, {
            width: '100vw',
            margin: 2,
            color: {
                // dark: '#335383FF',
                dark: colors.light,
                // light: '#EEEEEEFF'
                light: colors.dark,
            }
        }, (err, _url) => {
            if (err) {
                // eslint-disable-next-line no-console
                return console.error(err);
            }
            setQr(_url);
        });
    };

    useEffect(() => {
        generateCode();
    });

    return qr && <img src={qr} alt={altText ? altText : "qr code"} />;
};

export default QrCode;
