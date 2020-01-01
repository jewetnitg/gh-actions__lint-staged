import * as core from "@actions/core";
import { execSync } from "child_process";
import { writeFileSync } from "fs";

const paths = {
    config: ".lintstagedrc.json",
};

async function run(): Promise<void> {
    try {
        const config = core.getInput("config");

        execSync(`npm install -D lint-staged`, { env: process.env });
        writeFileSync(paths.config, config);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
