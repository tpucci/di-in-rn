# Hello

Introduction of who I am. Where I work. What do I do ? What do we do ?

# Dependency Injection in React Native

Why this subject ?

- Something well known in other framework. Completely ignored in JS/typescript in general.

What is specific to RN ?

- Some technics are interesting for mobile and RN is a JS/typescript mobile framework.

What do want to accomplish ?

- Replace things as easy as a Lego block.

# Coupling

Something that import something else created some coupling. Even if we tried as hard as we can to seperate things in different folders, we end up in an "organized" mess. The point is it is difficult to replace a piece of technology.

# Complexity

Human tend to create disorder with time: new team, new tech, new vision, new features, etc... Without a strategy to contain it, we're doomed to rewrite things every 4 years.

However, with a stragegy, we can arrange to limit to the strict minimum requirements between our piece of software.

# Dependency Injection

The principle is to create an inversion of Control.
Also known as the Hollywood Principle.

# DI in React

Basic stuff : Props and Context.
I have a very strong feeling that is why React is huge and popular. Because of this strict application of the inversion of control at the core of the framework!

Now, we had third party libs, and the coupling and spaghetti code begins. How to avoid that?

Using manual or automatic DI.

Livecode : let's see the libs.

# Promise

I promised it would be as easy as replacing a piece of Lego. Here it is: an app with Redux, Mobx. And RN knows nothing about it. See dep graph.

# Special Techniques for RN

Feature flag.
A/B Testing.
Scoped Injection per page (for demo for example).

# Thanks
