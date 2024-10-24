import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {FC, PropsWithChildren, useState} from "react";
import {Input} from "@/components/ui/input.tsx";
import divider from "/divider.png";
import {ResultsPanel} from "@/components/ResultsPanel.component.tsx";
import {calculateStatistics} from "@/calculation-service.ts";
import {transformState} from "@/util.ts";



function App() {
    const [courts, setCourts] = useState('1');
    const [hours, setHours] = useState('1');
    const [pricePerHour, setPricePerHour] = useState('80');
    const [fameTotal, setFameTotal] = useState('');
    const [mCoverOwners, setMCoverOwners] = useState('');
    const [msOwners, setMSOwners] = useState('');
    const [msClassicOwners, setMSClassicOwners] = useState('');
    const [noCard, setNoCard] = useState('');
    const [mCoverUsage, setMCoverUsage] = useState('');
    const [msUsage, setMSUsage] = useState('');


    const statistics = calculateStatistics(
        transformState({
            courts,
            hours,
            pricePerHour,
            fameTotal,
            mCoverOwners,
            msOwners,
            msClassicOwners,
            noCard,
            mCoverUsage,
            msUsage,
        })
    );
    return (
        <div className={'min-h-[100vh] bg-[#221d37] w-full flex justify-center'}>
            <div className={"min-h-[100vh] mx-auto outline outline-[#4D4D9F] min-w-80 p-4 w-full max-w-[500px]"} style={{
                backgroundImage: 'url(/bg.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
                <Row>
                    <Column>
                        <Label>Courts</Label>
                        <Select value={courts} onValueChange={setCourts}>
                            <SelectTrigger className="w-full">
                                <SelectValue defaultValue={'1'}/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value={'1'}>1</SelectItem>
                                    <SelectItem value={'2'}>2</SelectItem>
                                    <SelectItem value={'3'}>3</SelectItem>
                                    <SelectItem value={'4'}>4</SelectItem>
                                    <SelectItem value={'5'}>5</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </Column>
                    <Column>
                        <Label>Hours</Label>
                        <Select value={hours} onValueChange={setHours}>
                            <SelectTrigger className="min-w-full">
                                <SelectValue/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value={'1'}>1</SelectItem>
                                    <SelectItem value={'1.5'}>1.5</SelectItem>
                                    <SelectItem value={'2'}>2</SelectItem>
                                    <SelectItem value={'2.5'}>2.5</SelectItem>
                                    <SelectItem value={'3'}>3</SelectItem>
                                    <SelectItem value={'3.5'}>3.5</SelectItem>
                                    <SelectItem value={'4'}>4</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </Column>
                </Row>

                <Row>
                    <Column>
                        <Label>Price per 1h</Label>
                        <Input value={pricePerHour} onChange={(e) => setPricePerHour(e.target.value)}/>
                    </Column>
                    <Column>
                        <Label>FAME total</Label>
                        <Input value={fameTotal} onChange={(e) => setFameTotal(e.target.value)}/>
                    </Column>
                </Row>

                <Row>
                    <Column>
                        <Label>M-cover owners</Label>
                        <Input value={mCoverOwners} onChange={(e) => setMCoverOwners(e.target.value)}/>
                    </Column>
                    <Column>
                        <Label>M-cover usage</Label>
                        <Input value={mCoverUsage} onChange={(e) => setMCoverUsage(e.target.value)}/>
                    </Column>
                </Row>

                <Row>
                    <Column>
                        <Label>MS+ owners</Label>
                        <Input value={msOwners} onChange={(e) => setMSOwners(e.target.value)}/>
                    </Column>
                    <Column>
                        <Label>MS + MSC usage</Label>
                        <Input value={msUsage} onChange={(e) => setMSUsage(e.target.value)}/>
                    </Column>
                </Row>

                <Row>
                    <Column>
                        <Label>MS Classic owners</Label>
                        <Input value={msClassicOwners} onChange={(e) => setMSClassicOwners(e.target.value)}/>
                    </Column>
                    <Column>
                        <Label>No card</Label>
                        <Input value={noCard} onChange={(e) => setNoCard(e.target.value)}/>
                    </Column>
                </Row>

                <img className={'my-6'} src={divider} alt="divider"/>

                <ResultsPanel statistics={statistics}/>
            </div>
        </div>
    )
}

const Row: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={'flex gap-x-4 mt-4'}>
            {children}
        </div>
    )
}


const Label: FC<PropsWithChildren> = ({children}) => {
    return (
        <h2 className={'text-sm text-white font-medium'}>
            {children}
        </h2>
    )
}


const Column: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={'flex flex-col flex-1 gap-y-2'}>
            {children}
        </div>
    )
}

export default App

