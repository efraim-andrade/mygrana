import { format } from 'date-fns';
import br from 'date-fns/locale/pt-BR';

export function getMonthWrittenInFull() {
  return format(new Date(), 'MMMM', { locale: br });
}
