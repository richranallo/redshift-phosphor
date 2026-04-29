import sampleJson from "./sample.json";
import redShift from "./redshift.json";

export interface BundledScript {
    id: string;
    label: string;
    json: any;
}

export const BUNDLED_SCRIPTS: BundledScript[] = [
    { id: "sample",      label: "PHOSPHOR SAMPLE SCRIPT",     json: sampleJson    },
    { id: "Red Shift",   label: "RED SHIFT",                  json: redShift      }
];

export const DEFAULT_SCRIPT = BUNDLED_SCRIPTS[0];
