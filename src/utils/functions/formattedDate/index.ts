import { format } from 'date-fns';
import br from 'date-fns/locale/pt-BR';

function getMonthWrittenInFull() {
  return format(new Date(), 'MMMM', { locale: br });
}

function test() {
  return true;
}

export default { getMonthWrittenInFull, test };
