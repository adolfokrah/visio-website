"use client"
import Marquee from "@/components/magicui/marquee";
import { Container } from "@/components/ui/container";
import {  cn, getProjectMode, Text } from "visio-cms-lib";
import { Block, MediaFile } from "visio-cms-lib/types";
import List from 'visio-cms-lib/List'
import Image from 'next/image';
import VisioImage from 'visio-cms-lib/Image';
import { useMemo } from "react";

interface IntegrationsProps {
    title: string,
    footerText: string,
    pageBlockId?: string,
    integrations: MediaFile[] 
}
const Integrations:Block<IntegrationsProps> =({title, pageBlockId='', integrations, footerText})=>{
    const isBuilderMode = getProjectMode() === 'BUILDER'
    const IntegrationsList = useMemo(()=>{
        return (
            <List
                    defaultPropValues={integrations}
                    pageBlockId={pageBlockId}
                    propName="integrations"
                    className={cn("flex items-center w-max mx-auto gap-4", isBuilderMode && 'flex-wrap')}
                    renderComponent={(integration, index)=>(
                        <VisioImage
                            defaultValue={integration}
                            propName={`integrations.${index}`}
                            pageBlockId={pageBlockId}
                            wrapperClassName="w-[100px] h-[50px] relative"
                            renderImage={(image) => (
                                <Image
                                    fill
                                    src={image.imagePublicUrl}
                                    alt={image.altText}
                                    unoptimized
                                    className="object-contain"
                                />
                            )}
                        />
                    )}
                />
        )
    },[integrations, pageBlockId, isBuilderMode])

    return (
        <div className="bg-dark-900 pb-20 md:py-32">
            <Container>
            <h2 className="text-4xl font-satoshi max-w-2xl mx-auto text-center pl-4 text-white text-satoshi mb-4 font-bold">
                    <Text propName="title" pageBlockId={pageBlockId} defaultValue={title}/>
            </h2>
            {isBuilderMode ? <>{IntegrationsList}</> :
            <Marquee className="[--duration:20s]">
               {IntegrationsList}
            </Marquee>}
            <p className="text-center text-white text-satoshi mt-8 text-sm font-light">
                <Text propName="footerText" pageBlockId={pageBlockId} defaultValue={footerText}/>
            </p>
            </Container>
        </div>
    )
}

Integrations.Schema = {
    name: "Integrations",
    id: 'integrations',
    defaultPropValues: {
        title: 'Seamlessly integrated into your composable stack',
        footerText: 'The list goes on...',
        integrations: []
    },
    sideEditingProps: [],
    lists: [
        {
            propName: 'integrations',
            label: 'Integrations',
            defaultValue: {
                mediaHash: undefined,
                altText: '',
                width: 100,
                hight: 100
            }
        }
    ]
}

export default Integrations;