import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    shippingAddress: {
      type: String,
      required: function () {
        return firstItemBought
      },
    },
    phoneNumber: {
      type: String,
      required: function () {
        return firstItemBought
      },
    },
    firstItemBought: {
      type: Boolean,
      def: false,
    },

    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

userSchema.methods.setFirstItemBought = function () {
  if (!this.firstItemBought) {
    this.firstItemBought = true
  }
}

const User = mongoose.model('User', userSchema)

export default User
