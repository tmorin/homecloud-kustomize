const path = require('path');
const fs = require('fs');
const YAML = require('yaml')
const pkg = require('./package.json');
const modulesNames = fs.readdirSync(path.join(__dirname, 'modules'))
for (const moduleName of modulesNames) {
    const dstPath = path.join(__dirname, 'modules', moduleName, 'base', 'kustomization.yaml')
    const dstContent = YAML.parse(fs.readFileSync(dstPath, 'utf8'));
    console.log(dstPath, 'from', dstContent.commonLabels['kustomize.morin.io/version'], 'to', pkg.version);
    dstContent.commonLabels['kustomize.morin.io/module'] = moduleName;
    dstContent.commonLabels['kustomize.morin.io/version'] = pkg.version;
    fs.writeFileSync(dstPath, YAML.stringify(dstContent));
}
