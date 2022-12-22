import PubSub from "pubsub-js"

export default function setLoading(value) {
    PubSub.publish('loader', value)
}