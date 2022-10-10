import React from 'react';

export function Rating(props: any) {
    if (props.value === 1) {
        return (
            <div>
                <StaR selected={true}/>
                <StaR selected={false}/>
                <StaR selected={false}/>
                <StaR selected={false}/>
                <StaR selected={false}/>
            </div>
        );
    }
    if (props.value === 2) {
        return (
            <div>
                <StaR selected={true}/>
                <StaR selected={true}/>
                <StaR selected={false}/>
                <StaR selected={false}/>
                <StaR selected={false}/>
            </div>
        );
    }
    if (props.value === 3) {
        return (
            <div>
                <StaR selected={true}/>
                <StaR selected={true}/>
                <StaR selected={true}/>
                <StaR selected={false}/>
                <StaR selected={false}/>
            </div>
        );
    }
    if (props.value === 4) {
        return (
            <div>
                <StaR selected={true}/>
                <StaR selected={true}/>
                <StaR selected={true}/>
                <StaR selected={true}/>
                <StaR selected={false}/>
            </div>
        );
    }
    if (props.value === 5) {
        return (
                <div>
                    <StaR selected={true}/>
                    <StaR selected={true}/>
                    <StaR selected={true}/>
                    <StaR selected={true}/>
                    <StaR selected={true}/>
                </div>
        );
    }
    return (
        <div>
            <StaR selected={false}/>
            <StaR selected={false}/>
            <StaR selected={false}/>
            <StaR selected={false}/>
            <StaR selected={false}/>
        </div>
    );

}

function StaR(props: any) {
    if (props.selected === true) {
        return <span><b>Star </b> </span>
    } else {
        return <span>Star </span>
    }
}

