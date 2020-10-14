import axios from 'axios'
const getPost = async (callback) => {

    try {
        const data = await axios.get('../data/posts.json')
        console.log(data)
        callback(data);

    } catch (error) {
        console.log('kaka voye' + error)
    }


    // fetch('../data/posts.json')
    //     .then(res => {
    //         console.log(res)
    //         return res.json()
    //     })
    //     .then(data => {
    //         callback(data)
    //     })
    //     .catch(err => console.error('kak voye la wiii' + err));
}
export default getPost