import manifest from '@neos-project/neos-ui-extensibility';
import LocationEditor from './LocationEditor';

manifest('Vette.Homepage:LocationEditor', {}, globalRegistry => {
    const editorsRegistry = globalRegistry.get('inspector').get('editors');

    editorsRegistry.add('Vette.Homepage/LocationEditor', {
        component: LocationEditor
    });
});