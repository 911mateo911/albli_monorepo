import { useDarkModeToggler } from '@al-bli/albli-ui';
import { FC } from 'react';
import { MainHero } from './components/mainHero';

export const LandingPage: FC = () => {
    const [toggleDarkMode] = useDarkModeToggler();

    return (
        <div>
            <MainHero
                onClick={console.log}
                onSearchChange={console.log}
                title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                subtitle="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."
            />
            <button onClick={toggleDarkMode} >toggle dark</button>
        </div>
    );
};
