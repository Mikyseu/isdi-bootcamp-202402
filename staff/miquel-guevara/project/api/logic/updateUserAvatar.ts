import { User } from '../data/index.ts';

async function updateUserAvatar(userId, newAvatar) {
    try {
        const result = await User.updateOne({ _id: userId }, { $set: { avatar: newAvatar } });

        if (result.modifiedCount === 0) {
            throw new Error('The user was not found or the avatar was already updated.');
        }

        return 'Avatar updated successfully';
    } catch (error) {
        throw new Error('Error updating user avatar: ' + error.message);
    }
}

export default updateUserAvatar;
