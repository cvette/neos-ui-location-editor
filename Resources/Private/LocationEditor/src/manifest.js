import manifest from '@neos-project/neos-ui-extensibility';
import LocationEditor from './LocationEditor';

manifest('Vette.Location:LocationEditor', {}, globalRegistry => {
    const editorsRegistry = globalRegistry.get('inspector').get('editors');

    editorsRegistry.add('Vette.Location/LocationEditor', {
        component: LocationEditor
    });
});