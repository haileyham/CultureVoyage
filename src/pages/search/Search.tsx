import React, { useEffect, useState } from 'react';
import '../../styles/main.scss';
import useDebounce from '../../hooks/useDebounce';
import { getSessionData, setSessionData } from '../../utils/sessionStorage';
import api from '../../api/api';

interface CulturalEvent {
    [key: string]: string | null | undefined;
}

export default function Searching(): JSX.Element {
    const [eventData, setEventData] = useState<CulturalEvent[]>([]);
    const [eventDataReco, setEventDataReco] = useState<CulturalEvent[]>([]);

    const [title, setTitle] = useState<string>('');

    const debounced = useDebounce(title, 400);

    const [searchIndex, setSearchIndex] = useState<number>(-1);

    const [buttonClicked, setButtonClicked] = useState<boolean>(false);

    const get = async (): Promise<void> => {
        if (!debounced) {
            // 검색어가 비어있을 경우 아무 작업도 하지 않음
            return;
        }
        const existingData = getSessionData(debounced);
        if (existingData) {
            console.log(existingData);
            setEventData(existingData);
            setEventDataReco(existingData); //따로
        } else {
            const culturalEvents = await api(debounced); //비동기 호출
            setEventData(culturalEvents);
            setEventDataReco(culturalEvents); // 따로빼서
            setSessionData(debounced, culturalEvents);
        }
    };

    useEffect(() => {
        if (debounced) {
            get();
        }
    }, [debounced]);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        setTitle(e.target.value);
        setButtonClicked(false);
        setSearchIndex(-1);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            get();
            setButtonClicked(true);
            setTitle('');
        }
        if (e.key === 'Tab') {
            console.log('Tab');
        }
        if (e.key === 'ArrowDown') {
            setSearchIndex((a) => (a !== eventDataReco.length ? a + 1 : 0));
        }
        if (e.key === 'ArrowUp') {
            setSearchIndex((a) => (a !== 0 ? a - 1 : eventDataReco.length));
        }
    };

    return (
        <>
            <div className="searchContainer">
                <header className="searchHeader">
                    <h1>찾아보자!</h1>
                    <div className="searchReco">
                        <input
                            onChange={handleInputChange}
                            onKeyDown={handleKeyPress}
                            type="text"
                            value={
                                searchIndex >= 0 &&
                                !buttonClicked &&
                                title &&
                                eventDataReco[searchIndex]?.TITLE
                                    ? (eventDataReco[searchIndex]
                                          ?.TITLE as string)
                                    : (title as string)
                            }
                        />
                        {title ? (
                            <span
                                className="searchClose"
                                onClick={() => {
                                    setTitle('');
                                }}
                            >
                                Ｘ
                            </span>
                        ) : null}
                        {debounced ? (
                            <ul className="searchRecommendBox">
                                {title &&
                                eventDataReco &&
                                eventDataReco.length > 0 ? (
                                    eventDataReco.map((data, i) => {
                                        const recommendationText =
                                            data.TITLE || '';
                                        const startIndex = recommendationText
                                            .toLowerCase()
                                            .indexOf(title.toLowerCase());
                                        const endIndex =
                                            startIndex + title.length;
                                        return (
                                            <li
                                                key={data.id}
                                                className={
                                                    i === searchIndex
                                                        ? 'selected'
                                                        : ''
                                                }
                                            >
                                                <a
                                                    href={
                                                        data.HMPG_ADDR as string
                                                    }
                                                    target="blank"
                                                    id="searchA"
                                                    title={data.TITLE as string}
                                                >
                                                    {startIndex > -1 &&
                                                    endIndex > -1 ? (
                                                        <>
                                                            {recommendationText.slice(
                                                                0,
                                                                startIndex,
                                                            )}
                                                            <strong className="recommendStrong">
                                                                {recommendationText.slice(
                                                                    startIndex,
                                                                    endIndex,
                                                                )}
                                                            </strong>
                                                            {recommendationText.slice(
                                                                endIndex,
                                                            )}
                                                        </>
                                                    ) : null}
                                                </a>
                                            </li>
                                        );
                                    })
                                ) : (
                                    <li>{debounced}</li>
                                )}
                            </ul>
                        ) : null}
                    </div>
                    <button
                        onClick={() => {
                            setButtonClicked(true);
                            setTitle('');
                            get();
                        }}
                    >
                        검색
                    </button>
                </header>
                <main className="cultureContainer">
                    {buttonClicked && eventDataReco[searchIndex] ? (
                        <div className="cultureBox2">
                            <a
                                className="hiddenBoxLink"
                                href={
                                    eventDataReco[searchIndex]
                                        ?.HMPG_ADDR as string
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <h2>{eventDataReco[searchIndex]?.TITLE}</h2>
                                <img
                                    src={
                                        eventDataReco[searchIndex]
                                            ?.MAIN_IMG as string
                                    }
                                    alt=""
                                />
                                <p>{eventDataReco[searchIndex]?.DATE}</p>
                                <p>{eventDataReco[searchIndex]?.GUNAME}</p>
                                <p>{eventDataReco[searchIndex]?.IS_FREE}</p>
                                <p>{eventDataReco[searchIndex]?.PLACE}</p>
                                <p>{eventDataReco[searchIndex]?.CODENAME}</p>
                            </a>
                        </div>
                    ) : (
                        buttonClicked &&
                        eventData &&
                        eventData.map((data) => {
                            return (
                                <div key={data.id} className="cultureBox">
                                    <a
                                        className="hiddenBoxLink"
                                        href={data.HMPG_ADDR as string}
                                        target="blank"
                                    >
                                        <h2>{data.TITLE}</h2>
                                        <img
                                            src={data.MAIN_IMG as string}
                                            alt=""
                                        />
                                        <p>{data.DATE}</p>
                                        <p>{data.GUNAME}</p>
                                        <p>{data.IS_FREE}</p>
                                        <p>{data.PLACE}</p>
                                        <p>{data.CODENAME}</p>
                                    </a>
                                </div>
                            );
                        })
                    )}
                </main>
            </div>
        </>
    );
}
