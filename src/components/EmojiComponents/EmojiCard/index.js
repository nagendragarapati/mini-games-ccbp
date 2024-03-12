import './index.css'

const EmojiCard = props => {
  const {emoji, onEmojiClick} = props

  const onChangeEmoji = () => {
    onEmojiClick(emoji.id)
  }

  return (
    <div className="emoji-icon-sec">
      <img src={emoji.emojiUrl} className="emoji_img" onClick={onChangeEmoji} />
    </div>
  )
}

export default EmojiCard
