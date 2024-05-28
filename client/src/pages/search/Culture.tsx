import '../../styles/main.scss';
import React, { useEffect, useState } from 'react';
import api2 from '../../api/api2';
import { useInView } from 'react-intersection-observer';
interface CulturalEvent {
    [key: string]: string | null | undefined;
}
export default function Culture() {
    const [ref, inView] = useInView();
    const [page, setPage] = useState(1);
    const [epage, esetPage] = useState(6);
    const [item, setItem] = useState<CulturalEvent[]>([]);
    const [hasMoreData, setHasMoreData] = useState(true);
    const getApi = async (): Promise<void> => {
        try {
            if (!hasMoreData) {
                return;
            }
            const data = await api2(page, epage);
            // console.log(data);

            if (data.length === 0) {
                setHasMoreData(false);
                return;
            }

            const combinedData = item.concat(data);
            setItem(combinedData);
            setPage((prevPage) => prevPage + 6);
            esetPage((prevPage) => prevPage + 6);
        } catch (error) {
            console.error('에러 발생:', error);
        }
    };

    useEffect(() => {
        if (inView) {
            console.log(inView, 'hello');
            getApi();
        }
    }, [inView]);

    return (
        <>
            <h1 className="postTitle">서울 문화 행사</h1>
            <div className="postWrap">
                {item?.map((post) => (
                    <div key={post.id} className="post">
                        <h2>{post.TITLE}</h2>
                        <div>
                            <img src={post.MAIN_IMG as string} />
                        </div>
                        <p>{post.GUNAME}</p>
                        <p>{post.PLACE}</p>
                        <p>{post.CODENAME}</p>
                    </div>
                ))}
            </div>
            <div ref={ref} style={{ visibility: 'hidden' }}></div>
            {!hasMoreData ? (
                <p>끝! 더 이상 불러올 데이터가 없옹~</p>
            ) : (
                <p aria-busy="true">데이터 로딩중</p>
            )}
        </>
    );
}
