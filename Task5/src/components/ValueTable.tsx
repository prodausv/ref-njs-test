import * as React from "react";

export interface ValueTableProps { itemsToDisplay: number[] }

export const ValueTable = (props: ValueTableProps) => (
    <table className='table table-bordered'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
            {
                props.itemsToDisplay.map((element: number, index: number) =>
                    <tr key={index + 1}><td>{index + 1}</td><td>{element}</td></tr>
                )
            }
        </tbody>
    </table>)