import incrSsArkJson from "./incr-ss-ark.json";
import gradientDescentTerminalJson from "./gradient-descent-terminal.json";
import ypsilon14Json from "./ypsilon14.json";
import sampleJson from "./sample.json";
import redShift from "./redshift.json";

export interface BundledScript {
    id: string;
    label: string;
    json: any;
}

export const BUNDLED_SCRIPTS: BundledScript[] = [
    { id: "ypsilon14",   label: "YPSILON-14",    json: ypsilon14Json },
    { id: "incr-ss-ark", label: "INCR-SS-ARK",  json: incrSsArkJson },
    { id: "gradient-descent-terminal", label: "GRADIENT DESCENT TERMINAL", json: gradientDescentTerminalJson },
    { id: "sample",      label: "PHOSPHOR SAMPLE SCRIPT",     json: sampleJson    },
    { id: "Red Shift",   label: "RED SHIFT",                  json: redShift      }
];

export const DEFAULT_SCRIPT = BUNDLED_SCRIPTS[0];
