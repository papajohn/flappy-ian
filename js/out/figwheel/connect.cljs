(ns figwheel.connect (:require [flappy-bird-demo.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "flappy-bird-demo", :websocket-url "ws://localhost:3449/figwheel-ws"})

