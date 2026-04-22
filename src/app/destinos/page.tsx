import Title from '@/app/components/Title';
import Grid from '@/app/components/Grid';
import { destinos } from '@/lib/destinos';

const Destinos = () => {
    return (
        <div>
            <Title title="Destinos"/>
            <Grid destinos={destinos}/>
        </div>
    );
}
export default Destinos;