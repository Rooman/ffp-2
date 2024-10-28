import {FC} from "react";
import {Statistics} from "@/calculation-service.ts";

interface ResultsPanelProps {
    statistics: Statistics;
}

export const ResultsPanel: FC<ResultsPanelProps> = ({statistics}) => {
    return <>
        <ResultRow title={'Medicover:'} value={statistics.medicover}/>
        <ResultRow title={'MS+:'} value={statistics.MS}/>
        <ResultRow title={'MS classic:'} value={statistics.msClassic}/>
        <ResultRow title={'No card:'} value={statistics.noMs}/>
        <ResultRow title={'Total w/o discount:'} value={statistics.totalPrice}/>
        <ResultRow title={'Card discount:'} value={statistics.discount}/>
        <ResultRow title={'Fame discount:'} value={statistics.fameDiscount}/>
        <ResultRow title={'To be paid:'} value={statistics.priceAfterDiscount}/>
    </>
}


const ResultRow = ({title, value}: { title: string, value: undefined | string }) => {
    return <div className={'flex flex-row justify-between mb-3'}>
        <p className={'text-[#E0E1E4] text-xs font-semibold'}>{title}</p>
        <p className={'text-[#E0E1E4] text-xs font-semibold'}>{value ? value + ' PLN' : '—'}</p>
    </div>
}