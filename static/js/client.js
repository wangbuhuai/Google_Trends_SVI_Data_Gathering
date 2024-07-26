// Created by Dayu Wang (dwang@stchas.edu) on 2024-07-25

// Last updated by Dayu Wang (dwang@stchas.edu) on 2024-07-25


let path = '';

document.addEventListener('DOMContentLoaded', () => {
    const apiKeyLabelElement = document.getElementById('api-key-label');
    const width1 = apiKeyLabelElement.getBoundingClientRect().width;
    const apiKeyErrorElement = document.getElementById('api-key-error');
    apiKeyErrorElement.style.paddingLeft = (width1 + 5).toString() + 'px';

    const databaseFileLabelElement = document.getElementById('database-file-label');
    const width2 = databaseFileLabelElement.getBoundingClientRect().width;
    const csvRequirementsElement = document.getElementById('csv-requirements');
    csvRequirementsElement.style.paddingLeft = (width2 + 5).toString() + 'px';
    const databaseFileErrorElement = document.getElementById('database-file-error');
    databaseFileErrorElement.style.paddingLeft = (width2 + 5).toString() + 'px';

    const columnLabelElement = document.getElementById('column-label');
    const width3 = columnLabelElement.getBoundingClientRect().width;
    const columnRequirementsElement = document.getElementById('column-requirements');
    columnRequirementsElement.style.paddingLeft = (width3 + 5).toString() + 'px';
    const columnErrorElement = document.getElementById('column-error');
    columnErrorElement.style.paddingLeft = (width3 + 5).toString() + 'px';

    document.getElementById('get-svi').addEventListener('click', () => {
        document.getElementById('get-svi').setAttribute('value', 'Uploading File');
        console.log(document.getElementById('get-svi').innerText);
    });
});