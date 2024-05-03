import { User } from '../data/index';

function updateUserAvatar(userId, newAvatar) {
    try {
        User.updateOne({ userId }, { $set: { avatar: newAvatar } });
        return 'Avatar correct';
    } catch (error) {
        throw new Error('Error updating user avatar: ' + error.message);
    }
}

export default updateUserAvatar;
