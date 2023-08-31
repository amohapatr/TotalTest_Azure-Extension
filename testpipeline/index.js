"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var tl = require("azure-pipelines-task-lib/task");
function run() {
    return __awaiter(this, void 0, void 0, function () {
        var hostport, hciConnection, port, arrhostport, userid, password, passTicket, testCaseLocPath, CLIPath, confFrom, exec, LocalCfg, cliStringLoc, Repo, Env, cliStringRepo;
        return __generator(this, function (_a) {
            try {
                hostport = tl.getInput('HCIConnection', true);
                if (hostport == null) {
                    tl.setResult(tl.TaskResult.Failed, 'No Connection found');
                    return [2 /*return*/];
                }
                console.log('HCI Connection :', hostport);
                arrhostport = hostport.split(":");
                hciConnection = arrhostport[0].trim();
                port = arrhostport[1].trim();
                userid = tl.getInput('UserID', true);
                if (userid == null) {
                    tl.setResult(tl.TaskResult.Failed, 'No UserID Provided');
                    return [2 /*return*/];
                }
                console.log('User running the test:', userid);
                password = tl.getInput('Password', true);
                if (password == null) {
                    tl.setResult(tl.TaskResult.Failed, 'No Password entered');
                    return [2 /*return*/];
                }
                console.log('Password has been provided for the user');
                passTicket = tl.getInput('PassTicket', false);
                testCaseLocPath = tl.getInput('TestLocationPath', true);
                if (testCaseLocPath == null) {
                    tl.setResult(tl.TaskResult.Failed, 'No Path found for the location of testcases');
                    return [2 /*return*/];
                }
                console.log('Test Case location path :', testCaseLocPath);
                CLIPath = tl.getInput('CLIInstallationPath', true);
                if (CLIPath == null) {
                    tl.setResult(tl.TaskResult.Failed, 'No Repo Path given');
                    return [2 /*return*/];
                }
                console.log('CLI Installation path :', CLIPath);
                confFrom = tl.getInput("Configuration", true);
                exec = require('child_process').exec;
                if (confFrom === "LocalTTTConf") {
                    console.log('Using Local Configuration');
                    LocalCfg = tl.getInput('LocalTTTConfiguration', true);
                    if (LocalCfg == null) {
                        tl.setResult(tl.TaskResult.Failed, 'No Local Config Path given');
                        return [2 /*return*/];
                    }
                    console.log('Local TTT Configuration path :', LocalCfg);
                    cliStringLoc = CLIPath + "\\" + "TotalTestFTCLI.bat" + " " + "-host" + " " + hciConnection + " " + "-port" + " " + port + " " + "-f" + " " + testCaseLocPath + " " + "-u" + " " + userid + " " + "-p" + " " + password + " " + "-cfgdir" + " " + LocalCfg + " " + "-loglevel INFO";
                    console.log(cliStringLoc);
                    exec(cliStringLoc);
                }
                else {
                    Repo = tl.getInput('Repository', true);
                    if (Repo == null) {
                        tl.setResult(tl.TaskResult.Failed, 'No Repo URL given');
                        return [2 /*return*/];
                    }
                    console.log('Repository URL :', Repo);
                    Env = tl.getInput('Environment', true);
                    if (Env == null) {
                        tl.setResult(tl.TaskResult.Failed, 'No Environment given');
                        return [2 /*return*/];
                    }
                    console.log('Environment used :', Env);
                    console.log('Using Repository Configuration');
                    cliStringRepo = CLIPath + "\\" + "TotalTestFTCLI.bat" + " " + "-f" + " " + testCaseLocPath + " " + "-u" + " " + userid + " " + "-p" + " " + password + " " + "-e" + " " + Env + " " + "--server" + " " + Repo + " " + "-loglevel INFO";
                    console.log(cliStringRepo);
                    exec(cliStringRepo);
                }
            }
            catch (err) {
                tl.setResult(tl.TaskResult.Failed, err.message);
            }
            return [2 /*return*/];
        });
    });
}
run();
