import {
  createSelector,
  createSlice,
  nanoid,
  PayloadAction,
} from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export const initialState = {
  posts: [
    {
      id: nanoid(),
      title: 'Post 1',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales id diam at lobortis. Pellentesque malesuada vestibulum massa, at porttitor odio convallis id. Nullam nec dui nulla. Vivamus efficitur hendrerit nisl, et aliquet quam dignissim ut. Fusce quis egestas erat. Aliquam ultrices, dui a laoreet euismod, augue felis finibus mi, nec luctus nulla turpis non massa. Nam non tempor arcu. Nulla sed ante eros. Curabitur finibus placerat rutrum. Suspendisse molestie id nunc porta mattis. Suspendisse lacinia urna quis cursus ornare. Maecenas felis mauris, feugiat vitae ultricies in, dignissim et odio. Mauris in urna in justo dictum luctus eget eleifend dolor. Nullam eget nulla malesuada, tincidunt lectus vitae, maximus est. Donec sit amet libero et lorem porta cursus. Pellentesque at auctor diam.',
    },
    {
      id: nanoid(),
      title: 'Post 2',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur pulvinar ligula non auctor. Mauris eget purus nec leo pretium elementum. Curabitur ut bibendum risus, ut accumsan dui. Cras ut lacinia lacus. Sed sit amet accumsan est. Praesent maximus, erat ac ultricies interdum, diam massa suscipit ex, at viverra neque diam ut est. Sed sit amet elit eu odio elementum egestas in nec massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas lobortis a elit non auctor. In sollicitudin ullamcorper nibh, vitae luctus lorem finibus eu. Nullam lacinia eleifend libero, quis ornare nisl scelerisque eget. Vivamus ac orci aliquam, euismod erat quis, viverra magna. Sed sollicitudin libero leo, laoreet ullamcorper dolor porta sed. Fusce et lorem nec turpis semper laoreet malesuada eu nunc. Morbi luctus sem vitae tincidunt lacinia.c',
    },
    {
      id: nanoid(),
      title: 'Post 3',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ipsum tellus, viverra in aliquam ac, consequat eu arcu. Nullam efficitur lorem vel lorem consequat lacinia at id nisi. Fusce egestas pulvinar facilisis. Morbi ut risus convallis, facilisis mauris ac, pellentesque lacus. Vestibulum convallis sapien ut leo aliquam, eu tincidunt sapien elementum. Ut vel sapien augue. Praesent nisi tortor, consectetur ac purus laoreet, fringilla accumsan tellus. Aenean placerat mi quis felis lacinia, quis consectetur nisl facilisis. Etiam tempor, odio in hendrerit aliquam, lacus ipsum efficitur lorem, at imperdiet lorem ex sed nulla. Suspendisse tristique laoreet hendrerit. Suspendisse potenti. Fusce mollis tincidunt lorem, sed facilisis augue vulputate nec.',
    },
    {
      id: nanoid(),
      title: 'Post 4',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur diam in eros auctor, vitae tristique nisl vehicula. Nulla finibus est ut neque dignissim gravida. Nunc et leo non neque fringilla consectetur sed eget sapien. Sed ex ex, lobortis sed gravida viverra, luctus nec leo. Sed pretium sem vel felis sodales, at dignissim nisl pulvinar. Morbi eu quam eu magna vestibulum commodo. Etiam odio lorem, maximus volutpat sapien ac, posuere venenatis lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ut purus porta, commodo turpis non, tempus mauris. Sed dapibus dui sed placerat congue. Ut posuere quam tortor, ut iaculis dolor suscipit id. Donec semper convallis arcu, at semper est molestie eu. Donec rhoncus neque in diam aliquam, a volutpat velit sagittis. Nam lobortis quis massa at cursus. Praesent molestie convallis ex eget hendrerit. Sed dapibus ac diam sit amet blandit',
    },
    {
      id: nanoid(),
      title: 'Post 5',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et augue vitae orci auctor eleifend. Vivamus mauris sem, posuere dictum mi et, dignissim aliquet erat. Aenean at placerat leo, id iaculis nunc. Nunc posuere facilisis quam, ut facilisis risus feugiat non. Nunc consectetur mollis dolor eget iaculis. In dignissim urna eu semper tristique. Nulla id efficitur purus. Integer eu scelerisque metus. Nullam quis libero vitae ex laoreet egestas sit amet sed augue. Morbi sit amet metus et ipsum porttitor posuere eu a tortor. Sed vitae orci dictum metus sagittis condimentum. Sed bibendum, erat a porttitor porta, purus lectus dignissim enim, nec convallis libero arcu quis massa. Quisque rhoncus semper sem, ac pulvinar metus feugiat a',
    },
  ],
  isLoading: false,
  isError: false,
  message: '',
}

type Post = {
  id?: string
  title: string
  body: string
}

export const FeedSlice = createSlice({
  name: 'Feed',
  initialState,
  reducers: {
    // refactor to use prepare callback
    addPost: (state, action: PayloadAction<Post, string>) => {
      state.posts = [{ id: nanoid(), ...action.payload }, ...state.posts]
    },
    deletePost: (state, action: PayloadAction<Post, string>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id)
    },
    editPost: (state, action: PayloadAction<Post, string>) => {
      state.posts = state.posts.map((post) => {
        if (post.id === action.payload.id) {
          post = { ...action.payload }
        }
        return post
      })
    },
  },
  extraReducers: {},
})

export const feedSelector = ({ feed }: RootState): Post[] => feed.posts

export const postIdSelector = createSelector(feedSelector, (state) =>
  state.map((post) => post.id),
)

export default FeedSlice.reducer
export const { addPost, editPost, deletePost } = FeedSlice.actions
