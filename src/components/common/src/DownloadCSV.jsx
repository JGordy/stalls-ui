import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { CSVLink } from 'react-csv';

import '../styles/DownloadCSV.css';

import { Glyphicon } from './';

const DownloadCSV = ({
    className,
    data,
    filename,
    headers,
    label,
}) => {
    // console.warn("CSV Data: ", csvData);

    return (
        <Fragment>
            <CSVLink
                className={`csv-download ${className}`}
                filename={`${filename.split(' ').join('-').toLowerCase()}.csv`}
                data={data}
                headers={headers && headers}
                target="_blank"
            >
                <Glyphicon icon='download' />
                {label}
            </CSVLink>
        </Fragment>
    );
};

DownloadCSV.propTypes = {
    /**
     * The classname to apply to the root node
     */
    className: PropTypes.string,
    /**
     * The text to render at the root nodes
     */
    label: PropTypes.string.isRequired,
    /**
     * The name to apply to the downloaded file.
     * Component will append the .csv extension automatically, no need to specify that when passing this string
     */
    filename: PropTypes.string.isRequired,
    /**
     * The column headers to be provided in the csv form.
     * If not provided the component pulls them from the objects keys
     */
    headers: PropTypes.array,
    /**
     * The data to be downloaded in an array format
     */
    data: PropTypes.array.isRequired,
};

DownloadCSV.defaultProps = {
    label: 'Download',
    className: '',
};

export default DownloadCSV;