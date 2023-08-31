import tl = require('azure-pipelines-task-lib/task');

async function run() {

    let hostport: string | undefined;
    let hciConnection: string | undefined;
    let port: string | undefined;
    let arrhostport: string[] | undefined;
    try {
        hostport = tl.getInput('HCIConnection', true);
        if (hostport == null) {
            tl.setResult(tl.TaskResult.Failed, 'No Connection found');
            return;
        }
        console.log('HCI Connection :', hostport);

        arrhostport = hostport.split(":");

        hciConnection = arrhostport[0].trim();

        port = arrhostport[1].trim();

        const userid: string | undefined = tl.getInput('UserID', true);
        if (userid == null) {
            tl.setResult(tl.TaskResult.Failed, 'No UserID Provided');
            return;
        }
        console.log('User running the test:', userid);


        const password: string | undefined = tl.getInput('Password', true);
        if (password == null) {
            tl.setResult(tl.TaskResult.Failed, 'No Password entered');
            return;
        }
        console.log('Password has been provided for the user');

        const passTicket: string | undefined = tl.getInput('PassTicket', false);

        const testCaseLocPath: string | undefined = tl.getInput('TestLocationPath', true);
        if (testCaseLocPath == null) {
            tl.setResult(tl.TaskResult.Failed, 'No Path found for the location of testcases');
            return;
        }
        console.log('Test Case location path :', testCaseLocPath);

        const CLIPath: string | undefined = tl.getInput('CLIInstallationPath', true);
        if (CLIPath == null) {
            tl.setResult(tl.TaskResult.Failed, 'No Repo Path given');
            return;
        }
        console.log('CLI Installation path :', CLIPath);

        const confFrom = tl.getInput("Configuration", true);
        var exec = require('child_process').exec;
        if (confFrom === "LocalTTTConf") {
            console.log('Using Local Configuration');
            const LocalCfg: string | undefined = tl.getInput('LocalTTTConfiguration', true);
            if (LocalCfg == null) {
                tl.setResult(tl.TaskResult.Failed, 'No Local Config Path given');
                return;
            }
            console.log('Local TTT Configuration path :', LocalCfg);
            var cliStringLoc = CLIPath + "\\" + "TotalTestFTCLI.bat" + " " + "-host" + " " + hciConnection + " " + "-port" + " " + port + " " + "-f" + " " + testCaseLocPath + " " + "-u" + " " + userid + " " + "-p" + " " + password + " " + "-cfgdir" + " " + LocalCfg + " " + "-loglevel INFO";
            console.log(cliStringLoc);
            exec(cliStringLoc);

        }
        else {
            const Repo: string | undefined = tl.getInput('Repository', true);
            if (Repo == null) {
                tl.setResult(tl.TaskResult.Failed, 'No Repo URL given');
                return;
            }
            console.log('Repository URL :', Repo);

            const Env: string | undefined = tl.getInput('Environment', true);
            if (Env == null) {
                tl.setResult(tl.TaskResult.Failed, 'No Environment given');
                return;
            }
            console.log('Environment used :', Env);
            console.log('Using Repository Configuration');
            var cliStringRepo = CLIPath + "\\" + "TotalTestFTCLI.bat" + " " + "-f" + " " + testCaseLocPath + " " + "-u" + " " + userid + " " + "-p" + " " + password + " " + "-e" + " " + Env + " " + "--server" + " " + Repo + " " + "-loglevel INFO";
            console.log(cliStringRepo);
            exec(cliStringRepo);
        }
    }
    catch (err: any) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();