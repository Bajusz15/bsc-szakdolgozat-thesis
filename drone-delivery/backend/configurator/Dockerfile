FROM golang:1.16 AS builder
#
#RUN apk --update add \
#	git openssl \
#	&& rm /var/cache/apk/*

RUN mkdir -p /go/src/drone-delivery/configurator
WORKDIR /go/src/drone-delivery/configurator

COPY go.mod /go/src/drone-delivery/configurator
COPY go.sum /go/src/drone-delivery/configurator
RUN go mod download
COPY ./ /go/src/drone-delivery/configurator
WORKDIR /go/src/drone-delivery/configurator/cmd/drone-delivery-configurator
RUN go install

#Second stage
#FROM alpine:latest
#RUN apk --no-cache add ca-certificates
#RUN mkdir -p /go/src/drone-delivery/configurator
#WORKDIR /go/src/drone-delivery/configurator
#COPY --from=builder /go/src/drone-delivery/configurator /go/src/drone-delivery/configurator
#COPY --from=builder /go/bin/drone-delivery-configurator /go/bin/drone-delivery-configurator
ENTRYPOINT ["/go/bin/drone-delivery-configurator"]
EXPOSE 3000