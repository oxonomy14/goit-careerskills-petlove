import css from './OurFriendsPage.module.css';
import Title from '../../components/Title/Title';
import FriendsList from '../../components/FriendsList/FriendsList';
import FriendsItem from '../../components/FriendsItem/FriendsItem';
import Loader from '../../components/Loader/Loader';
import {fetchFriends} from '../../redux/friends/friendsOperations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UNSAFE_getPatchRoutesOnNavigationFunction } from 'react-router-dom';

const OurFriendsPage = () => {

    const dispatch = useDispatch();
    const friendItems = useSelector(state => state.friendsList.items);
    const isLoading = useSelector(state => state.friendsList.isLoading);
    const error = useSelector(state => state.friendsList.error);



useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  


  if (error) return <p>Error: {error}</p>;




    return (<>
     {isLoading ? <Loader /> :
    <section className={css.sectionOurFriendsPage}>
        <div className={css.title}>
<Title>Our friends</Title>
</div>
<div className={css.content}>

<FriendsList >
        {friendItems.map(friend => (
    <FriendsItem friend={friend} key={friend._id}/>
        ))}
</FriendsList>
</div>
    </section>
}
    </>);
};

export default OurFriendsPage;