import { Blue, Green, Red, Color, Yellow } from './index';
import Styles from './styles';

const info = new Blue();
const success = new Green();
const error = new Red();
const warn = new Yellow();

info.log('This is an information.');
success.log('Congratulations!');
error.log('Something is wrong!');
warn.log('Be careful!');

const info2 = new Blue('👉');
const success2 = new Green('🎉');
const error2 = new Red('⛔️');

info2.log('This is an information.');
success2.log('Congratulations!');
error2.log('Something is wrong!');

const info3 = new Blue(() => `[${new Date()}]:`);
info3.log('This is an information.');

const info4 = new Color(Styles.FgWhite, '');
info4.log('This is the last message.');
info4.disable();
info4.log('This message should not be displayed.');
