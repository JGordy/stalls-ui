import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import classnames from 'classnames';

const QrCode = ({
    url,
    colors = {},
    altText,
    className,
    download,
    downloadTrigger,
}) => {
    const imgClass = classnames(
        'qr-code',
        className,
    );

    const [qrSrc, setQrSrc] = useState('');

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
        }, (err, src) => {
            if (err) {
                // eslint-disable-next-line no-console
                return console.error(err);
            }
            setQrSrc(src);
        });
    };

    useEffect(() => {
        generateCode();
    });

    return qrSrc && (
        <React.Fragment>
            <img
                src={qrSrc}
                alt={altText ? altText : "qr code"}
                className={imgClass}
            />
            {download && downloadTrigger}
        </React.Fragment>
    );
};

export default QrCode;
