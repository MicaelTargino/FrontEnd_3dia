import {CircleNotch} from "phosphor-react"
import React from 'react';
export function Loading() {
    return (
        <div className="flex items-center justify-center w-screen h-screen mx-auto">
            <CircleNotch className="w-12 h-12 animate-spin" />
        </div>
    )
}