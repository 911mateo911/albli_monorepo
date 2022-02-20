import { FC } from 'react';
import { ImagesViewer, PostControl } from './components';
import styles from './productPage.module.scss';

const fakePhotos = [
    'https://res.cloudinary.com/dxtjwhnoz/image/upload/v1626531888/alBli/u5hsebdsqeg05eaeip1u.jpg',
    'https://res.cloudinary.com/dxtjwhnoz/image/upload/v1626531888/alBli/rph9smkxzz25jotfgmyd.jpg',
    'https://res.cloudinary.com/dxtjwhnoz/image/upload/v1626531888/alBli/mrj8airxoqueotdngch0.jpg',
    'https://res.cloudinary.com/dxtjwhnoz/image/upload/v1626531888/alBli/pgoevqpos77bcyho0t1h.jpg'
]

export const ProductPage: FC = () => {
    return (
        <div className={styles.wrapper} >
            <div className={styles['image-viewer-container']} >
                <div className={styles['image-viewer-wrapper']} >
                    <ImagesViewer photos={fakePhotos} />
                </div>
            </div>
            <div className={styles['post-heading-wrapper']} >
                <PostControl isLoggedIn={false} />
                <h2 className={styles['post-title']} >
                    Shitet audi q5 i 2010, title here, hello world
                </h2>
            </div>
        </div>
    )
}
