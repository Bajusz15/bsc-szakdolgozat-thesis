/domain
> This is using domain code.

/adapters/in
> An input to your application, and the only way the external world can reach it. 
>It could be an HTTP or gRPC server, a CLI command, or a Pub/Sub message subscriber.

/adapters/out
> This is how your application talks to the external world.
> You have to adapt your internal structures to what the external API expects.
> Think SQL queries, HTTP or gRPC clients, file readers and writers, Pub/Sub message publishers.