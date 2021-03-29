FROM golang:alpine AS builder

RUN apk --update add \
	git openssl \
	&& rm /var/cache/apk/*

RUN mkdir -p /go/src/drone-delivery/drone-swarm
WORKDIR /go/src/drone-delivery/drone-swarm

COPY go.mod /go/src/drone-delivery/drone-swarm
COPY go.sum /go/src/drone-delivery/drone-swarm
RUN go mod download
COPY ./ /go/src/drone-delivery/drone-swarm
WORKDIR /go/src/drone-delivery/drone-swarm/cmd/drone-delivery-swarm
RUN go install

#Second stage
FROM alpine:latest
RUN apk --no-cache add ca-certificates
RUN mkdir -p /go/src/drone-delivery/warehouse
WORKDIR /go/src/drone-delivery/warehouse
COPY --from=builder /go/src/drone-delivery/drone-swarm /go/src/drone-delivery/drone-swarm
COPY --from=builder /go/bin/drone-delivery-swarm /go/bin/drone-delivery-swarm
ENTRYPOINT ["/go/bin/drone-delivery-warehouse"]
EXPOSE 2000