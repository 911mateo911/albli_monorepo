import { FC } from 'react';
import { preferredContactsInputs } from '../../../../config';
import { PublishPageServiceInstance } from '../../../../publishPage.service';
import { useBehaviorSubject } from '../../../../../hooks';
import { PreferredContact } from '../preferredContact';
import { PreferredContactType } from '../../../../publishPage.interface';

export const PreferredContactsList: FC = () => {
    const activePreferredContact = useBehaviorSubject<PreferredContactType>(
        PublishPageServiceInstance.preferrredContact
    );

    return (<>
        {preferredContactsInputs.map(contact => (
            <PreferredContact<PreferredContactType>
                key={contact}
                isActive={contact === activePreferredContact}
                contact={contact}
                onClick={(thisContact) => PublishPageServiceInstance.preferrredContact.next(thisContact)}
            />
        ))}
    </>);
};
