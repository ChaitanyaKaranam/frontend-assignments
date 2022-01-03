import { ASSIGNMENTS, ACTIVE_ASSIGNMENT } from '../config/selectAssignment';
import { Assignment1, Assignment1Solution } from './1-basic-react-app';

export default function Assignments() {
    switch (ACTIVE_ASSIGNMENT) {
        case ASSIGNMENTS.ASSIGNMENT_1:
            return <Assignment1 />;
        case ASSIGNMENTS.ASSIGNMENT_1_SOL:
            return <Assignment1Solution />;
        default:
            return (
                <p>
                    Configure active assignment at{' '}
                    <pre>/config/selectAssignment.js</pre>
                </p>
            );
    }
}
