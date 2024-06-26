import React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface CulturalEvent {
    [key: string]: string | null | undefined;
}

export default async function api(debounced: string): Promise<CulturalEvent[]> {
    try {
        const response = await fetch(
            `${
                process.env.REACT_APP_URL
            }/?itemsStartPage=1&itemsPerPage=${1000}&debouncedValue=${debounced}`,
        );
        if (!response.ok) {
            throw new Error('오류');
        }
        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

        const culturalEvents: CulturalEvent[] = [];

        const rowElements = xmlDoc.querySelectorAll('row');
        rowElements.forEach((rowElement) => {
            const culturalEvent = {
                //key값 주기위해서 id부여
                id: uuidv4(), // UUID를 사용한 고유한 식별자
                CODENAME: rowElement.querySelector('CODENAME')?.textContent,
                GUNAME: rowElement.querySelector('GUNAME')?.textContent,
                TITLE: rowElement.querySelector('TITLE')?.textContent,
                DATE: rowElement.querySelector('DATE')?.textContent,
                PLACE: rowElement.querySelector('PLACE')?.textContent,
                ORG_NAME: rowElement.querySelector('ORG_NAME')?.textContent,
                USE_TRGT: rowElement.querySelector('USE_TRGT')?.textContent,
                USE_FEE: rowElement.querySelector('USE_FEE')?.textContent,
                PLAYER: rowElement.querySelector('PLAYER')?.textContent,
                PROGRAM: rowElement.querySelector('PROGRAM')?.textContent,
                ETC_DESC: rowElement.querySelector('ETC_DESC')?.textContent,
                ORG_LINK: rowElement.querySelector('ORG_LINK')?.textContent,
                MAIN_IMG: rowElement.querySelector('MAIN_IMG')?.textContent,
                RGSTDATE: rowElement.querySelector('RGSTDATE')?.textContent,
                TICKET: rowElement.querySelector('TICKET')?.textContent,
                STRTDATE: rowElement.querySelector('STRTDATE')?.textContent,
                END_DATE: rowElement.querySelector('END_DATE')?.textContent,
                THEMECODE: rowElement.querySelector('THEMECODE')?.textContent,
                LOT: rowElement.querySelector('LOT')?.textContent,
                LAT: rowElement.querySelector('LAT')?.textContent,
                IS_FREE: rowElement.querySelector('IS_FREE')?.textContent,
                HMPG_ADDR: rowElement.querySelector('HMPG_ADDR')?.textContent,
            };
            culturalEvents.push(culturalEvent);
        });
        return culturalEvents;
    } catch (error) {
        console.log('에러발생:', error);
        return [];
    }
}
