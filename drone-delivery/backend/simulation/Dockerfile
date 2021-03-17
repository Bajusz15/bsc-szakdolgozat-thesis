FROM golang:alpine AS builder

RUN apk --update add \
	git openssl \
	&& rm /var/cache/apk/*

RUN mkdir -p /go/src/drone-delivery/simulation
WORKDIR /go/src/drone-delivery/simulation

COPY go.mod /go/src/drone-delivery/simulation
COPY go.sum /go/src/drone-delivery/simulation
RUN go mod download
COPY ./ /go/src/drone-delivery/simulation
WORKDIR /go/src/drone-delivery/simulation/cmd/drone-delivery-simulation
RUN go install

#Second stage
FROM alpine:latest
RUN apk --no-cache add ca-certificates
RUN mkdir -p /go/src/drone-delivery/simulation
WORKDIR /go/src/drone-delivery/simulation
COPY --from=builder /go/src/drone-delivery/simulation /go/src/drone-delivery/simulation
COPY --from=builder /go/bin/drone-delivery-simulation /go/bin/drone-delivery-simulation
ENTRYPOINT ["/go/bin/drone-delivery-simulation"]
EXPOSE 3000